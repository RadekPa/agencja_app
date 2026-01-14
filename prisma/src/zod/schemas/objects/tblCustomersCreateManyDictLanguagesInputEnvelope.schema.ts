import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateManyDictLanguagesInputObjectSchema as tblCustomersCreateManyDictLanguagesInputObjectSchema } from './tblCustomersCreateManyDictLanguagesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblCustomersCreateManyDictLanguagesInputObjectSchema), z.lazy(() => tblCustomersCreateManyDictLanguagesInputObjectSchema).array()])
}).strict();
export const tblCustomersCreateManyDictLanguagesInputEnvelopeObjectSchema: z.ZodType<Prisma.tblCustomersCreateManyDictLanguagesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateManyDictLanguagesInputEnvelope>;
export const tblCustomersCreateManyDictLanguagesInputEnvelopeObjectZodSchema = makeSchema();
