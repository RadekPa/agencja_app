import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsCreateManyTblCustomersInputObjectSchema as tblMailingListsCreateManyTblCustomersInputObjectSchema } from './tblMailingListsCreateManyTblCustomersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblMailingListsCreateManyTblCustomersInputObjectSchema), z.lazy(() => tblMailingListsCreateManyTblCustomersInputObjectSchema).array()])
}).strict();
export const tblMailingListsCreateManyTblCustomersInputEnvelopeObjectSchema: z.ZodType<Prisma.tblMailingListsCreateManyTblCustomersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateManyTblCustomersInputEnvelope>;
export const tblMailingListsCreateManyTblCustomersInputEnvelopeObjectZodSchema = makeSchema();
