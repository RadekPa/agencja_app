import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersCreateManyTblUsersInputObjectSchema as tblCustUsersCreateManyTblUsersInputObjectSchema } from './tblCustUsersCreateManyTblUsersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblCustUsersCreateManyTblUsersInputObjectSchema), z.lazy(() => tblCustUsersCreateManyTblUsersInputObjectSchema).array()])
}).strict();
export const tblCustUsersCreateManyTblUsersInputEnvelopeObjectSchema: z.ZodType<Prisma.tblCustUsersCreateManyTblUsersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersCreateManyTblUsersInputEnvelope>;
export const tblCustUsersCreateManyTblUsersInputEnvelopeObjectZodSchema = makeSchema();
