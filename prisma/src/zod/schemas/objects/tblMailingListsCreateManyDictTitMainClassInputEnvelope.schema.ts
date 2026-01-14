import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsCreateManyDictTitMainClassInputObjectSchema as tblMailingListsCreateManyDictTitMainClassInputObjectSchema } from './tblMailingListsCreateManyDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblMailingListsCreateManyDictTitMainClassInputObjectSchema), z.lazy(() => tblMailingListsCreateManyDictTitMainClassInputObjectSchema).array()])
}).strict();
export const tblMailingListsCreateManyDictTitMainClassInputEnvelopeObjectSchema: z.ZodType<Prisma.tblMailingListsCreateManyDictTitMainClassInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateManyDictTitMainClassInputEnvelope>;
export const tblMailingListsCreateManyDictTitMainClassInputEnvelopeObjectZodSchema = makeSchema();
