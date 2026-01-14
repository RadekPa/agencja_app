import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuxSelectObjectSchema as tblTitAuxSelectObjectSchema } from './objects/tblTitAuxSelect.schema';
import { tblTitAuxIncludeObjectSchema as tblTitAuxIncludeObjectSchema } from './objects/tblTitAuxInclude.schema';
import { tblTitAuxWhereUniqueInputObjectSchema as tblTitAuxWhereUniqueInputObjectSchema } from './objects/tblTitAuxWhereUniqueInput.schema';

export const tblTitAuxFindUniqueOrThrowSchema: z.ZodType<Prisma.tblTitAuxFindUniqueOrThrowArgs> = z.object({ select: tblTitAuxSelectObjectSchema.optional(), include: tblTitAuxIncludeObjectSchema.optional(), where: tblTitAuxWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTitAuxFindUniqueOrThrowArgs>;

export const tblTitAuxFindUniqueOrThrowZodSchema = z.object({ select: tblTitAuxSelectObjectSchema.optional(), include: tblTitAuxIncludeObjectSchema.optional(), where: tblTitAuxWhereUniqueInputObjectSchema }).strict();