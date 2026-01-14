import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsCreateManyTblCustomersInputObjectSchema as tblCustContactsCreateManyTblCustomersInputObjectSchema } from './tblCustContactsCreateManyTblCustomersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblCustContactsCreateManyTblCustomersInputObjectSchema), z.lazy(() => tblCustContactsCreateManyTblCustomersInputObjectSchema).array()])
}).strict();
export const tblCustContactsCreateManyTblCustomersInputEnvelopeObjectSchema: z.ZodType<Prisma.tblCustContactsCreateManyTblCustomersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsCreateManyTblCustomersInputEnvelope>;
export const tblCustContactsCreateManyTblCustomersInputEnvelopeObjectZodSchema = makeSchema();
