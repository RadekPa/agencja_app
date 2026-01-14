import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessCreateManyTblUsersInputObjectSchema as tblUserAccessCreateManyTblUsersInputObjectSchema } from './tblUserAccessCreateManyTblUsersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblUserAccessCreateManyTblUsersInputObjectSchema), z.lazy(() => tblUserAccessCreateManyTblUsersInputObjectSchema).array()])
}).strict();
export const tblUserAccessCreateManyTblUsersInputEnvelopeObjectSchema: z.ZodType<Prisma.tblUserAccessCreateManyTblUsersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessCreateManyTblUsersInputEnvelope>;
export const tblUserAccessCreateManyTblUsersInputEnvelopeObjectZodSchema = makeSchema();
