import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsArgsObjectSchema as tblAgreementsArgsObjectSchema } from './tblAgreementsArgs.schema';
import { dictAgrEventsArgsObjectSchema as dictAgrEventsArgsObjectSchema } from './dictAgrEventsArgs.schema'

const makeSchema = () => z.object({
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsArgsObjectSchema)]).optional(),
  dictAgrEvents: z.union([z.boolean(), z.lazy(() => dictAgrEventsArgsObjectSchema)]).optional()
}).strict();
export const tblAgrEventsIncludeObjectSchema: z.ZodType<Prisma.tblAgrEventsInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsInclude>;
export const tblAgrEventsIncludeObjectZodSchema = makeSchema();
