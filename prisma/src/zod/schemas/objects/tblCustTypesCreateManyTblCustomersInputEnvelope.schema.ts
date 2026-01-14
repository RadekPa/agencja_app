import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesCreateManyTblCustomersInputObjectSchema as tblCustTypesCreateManyTblCustomersInputObjectSchema } from './tblCustTypesCreateManyTblCustomersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblCustTypesCreateManyTblCustomersInputObjectSchema), z.lazy(() => tblCustTypesCreateManyTblCustomersInputObjectSchema).array()])
}).strict();
export const tblCustTypesCreateManyTblCustomersInputEnvelopeObjectSchema: z.ZodType<Prisma.tblCustTypesCreateManyTblCustomersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesCreateManyTblCustomersInputEnvelope>;
export const tblCustTypesCreateManyTblCustomersInputEnvelopeObjectZodSchema = makeSchema();
