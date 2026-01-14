import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateManyTblCustomersInputObjectSchema as tblSubmissionsCreateManyTblCustomersInputObjectSchema } from './tblSubmissionsCreateManyTblCustomersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblSubmissionsCreateManyTblCustomersInputObjectSchema), z.lazy(() => tblSubmissionsCreateManyTblCustomersInputObjectSchema).array()])
}).strict();
export const tblSubmissionsCreateManyTblCustomersInputEnvelopeObjectSchema: z.ZodType<Prisma.tblSubmissionsCreateManyTblCustomersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsCreateManyTblCustomersInputEnvelope>;
export const tblSubmissionsCreateManyTblCustomersInputEnvelopeObjectZodSchema = makeSchema();
