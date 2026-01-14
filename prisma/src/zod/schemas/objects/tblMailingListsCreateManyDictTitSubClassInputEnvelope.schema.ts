import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsCreateManyDictTitSubClassInputObjectSchema as tblMailingListsCreateManyDictTitSubClassInputObjectSchema } from './tblMailingListsCreateManyDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblMailingListsCreateManyDictTitSubClassInputObjectSchema), z.lazy(() => tblMailingListsCreateManyDictTitSubClassInputObjectSchema).array()])
}).strict();
export const tblMailingListsCreateManyDictTitSubClassInputEnvelopeObjectSchema: z.ZodType<Prisma.tblMailingListsCreateManyDictTitSubClassInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateManyDictTitSubClassInputEnvelope>;
export const tblMailingListsCreateManyDictTitSubClassInputEnvelopeObjectZodSchema = makeSchema();
