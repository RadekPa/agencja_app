import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsCreateManyTblContactsInputObjectSchema as tblCustContactsCreateManyTblContactsInputObjectSchema } from './tblCustContactsCreateManyTblContactsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblCustContactsCreateManyTblContactsInputObjectSchema), z.lazy(() => tblCustContactsCreateManyTblContactsInputObjectSchema).array()])
}).strict();
export const tblCustContactsCreateManyTblContactsInputEnvelopeObjectSchema: z.ZodType<Prisma.tblCustContactsCreateManyTblContactsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsCreateManyTblContactsInputEnvelope>;
export const tblCustContactsCreateManyTblContactsInputEnvelopeObjectZodSchema = makeSchema();
