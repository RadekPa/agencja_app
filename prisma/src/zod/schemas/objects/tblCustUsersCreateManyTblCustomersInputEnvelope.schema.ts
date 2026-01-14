import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersCreateManyTblCustomersInputObjectSchema as tblCustUsersCreateManyTblCustomersInputObjectSchema } from './tblCustUsersCreateManyTblCustomersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblCustUsersCreateManyTblCustomersInputObjectSchema), z.lazy(() => tblCustUsersCreateManyTblCustomersInputObjectSchema).array()])
}).strict();
export const tblCustUsersCreateManyTblCustomersInputEnvelopeObjectSchema: z.ZodType<Prisma.tblCustUsersCreateManyTblCustomersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersCreateManyTblCustomersInputEnvelope>;
export const tblCustUsersCreateManyTblCustomersInputEnvelopeObjectZodSchema = makeSchema();
