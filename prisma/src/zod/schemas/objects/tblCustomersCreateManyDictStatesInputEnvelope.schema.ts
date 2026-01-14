import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateManyDictStatesInputObjectSchema as tblCustomersCreateManyDictStatesInputObjectSchema } from './tblCustomersCreateManyDictStatesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblCustomersCreateManyDictStatesInputObjectSchema), z.lazy(() => tblCustomersCreateManyDictStatesInputObjectSchema).array()])
}).strict();
export const tblCustomersCreateManyDictStatesInputEnvelopeObjectSchema: z.ZodType<Prisma.tblCustomersCreateManyDictStatesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateManyDictStatesInputEnvelope>;
export const tblCustomersCreateManyDictStatesInputEnvelopeObjectZodSchema = makeSchema();
