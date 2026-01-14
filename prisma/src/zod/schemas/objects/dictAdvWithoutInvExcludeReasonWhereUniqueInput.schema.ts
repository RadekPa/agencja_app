import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ExcludeReasonID: z.number().int().optional()
}).strict();
export const dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonWhereUniqueInput>;
export const dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectZodSchema = makeSchema();
