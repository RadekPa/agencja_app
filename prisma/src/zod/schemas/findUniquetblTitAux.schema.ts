import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuxSelectObjectSchema as tblTitAuxSelectObjectSchema } from './objects/tblTitAuxSelect.schema';
import { tblTitAuxIncludeObjectSchema as tblTitAuxIncludeObjectSchema } from './objects/tblTitAuxInclude.schema';
import { tblTitAuxWhereUniqueInputObjectSchema as tblTitAuxWhereUniqueInputObjectSchema } from './objects/tblTitAuxWhereUniqueInput.schema';

export const tblTitAuxFindUniqueSchema: z.ZodType<Prisma.tblTitAuxFindUniqueArgs> = z.object({ select: tblTitAuxSelectObjectSchema.optional(), include: tblTitAuxIncludeObjectSchema.optional(), where: tblTitAuxWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTitAuxFindUniqueArgs>;

export const tblTitAuxFindUniqueZodSchema = z.object({ select: tblTitAuxSelectObjectSchema.optional(), include: tblTitAuxIncludeObjectSchema.optional(), where: tblTitAuxWhereUniqueInputObjectSchema }).strict();