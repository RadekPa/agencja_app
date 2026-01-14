import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserParamsCreateManyTblUsersInputObjectSchema as tblUserParamsCreateManyTblUsersInputObjectSchema } from './tblUserParamsCreateManyTblUsersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblUserParamsCreateManyTblUsersInputObjectSchema), z.lazy(() => tblUserParamsCreateManyTblUsersInputObjectSchema).array()])
}).strict();
export const tblUserParamsCreateManyTblUsersInputEnvelopeObjectSchema: z.ZodType<Prisma.tblUserParamsCreateManyTblUsersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsCreateManyTblUsersInputEnvelope>;
export const tblUserParamsCreateManyTblUsersInputEnvelopeObjectZodSchema = makeSchema();
