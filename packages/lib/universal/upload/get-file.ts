import { base64 } from '@scure/base';
import { match } from 'ts-pattern';

import { DocumentDataType } from '@documenso/prisma/client';

import { getPresignGetUrl } from './server-actions';

export type GetFileOptions = {
  type: DocumentDataType;
  data: string;
};

export const getFile = async ({ type, data }: GetFileOptions) => {
  return await match(type)
    .with(DocumentDataType.BYTES, () => getFileFromBytes(data))
    .with(DocumentDataType.BYTES_64, () => getFileFromBytes64(data))
    .with(DocumentDataType.S3_PATH, async () => getFileFromS3(data))
    .exhaustive();
};

const getFileFromBytes = (data: string) => {
  const encoder = new TextEncoder();

  const binaryData = encoder.encode(data);

  return binaryData;
};

const getFileFromBytes64 = (data: string) => {
  const binaryData = base64.decode(data);

  return binaryData;
};

const getFileFromS3 = async (key: string) => {
  const { url } = await getPresignGetUrl(key);

  const buffer = await fetch(url, {
    method: 'GET',
  }).then(async (res) => res.arrayBuffer());

  const binaryData = new Uint8Array(buffer);

  return binaryData;
};