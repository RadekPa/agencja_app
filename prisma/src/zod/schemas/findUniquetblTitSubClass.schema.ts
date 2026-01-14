import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitSubClassSelectObjectSchema as tblTitSubClassSelectObjectSchema } from './objects/tblTitSubClassSelect.schema';
import { tblTitSubClassIncludeObjectSchema as tblTitSubClassIncludeObjectSchema } from './objects/tblTitSubClassInclude.schema';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './objects/tblTitSubClassWhereUniqueInput.schema';

export const tblTitSubClassFindUniqueSchema: z.ZodType<Prisma.tblTitSubClassFindUniqueArgs> = z.object({ select: tblTitSubClassSelectObjectSchema.optional(), include: tblTitSubClassIncludeObjectSchema.optional(), where: tblTitSubClassWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTitSubClassFindUniqueArgs>;

export const tblTitSubClassFindUniqueZodSchema = z.object({ select: tblTitSubClassSelectObjectSchema.optional(), include: tblTitSubClassIncludeObjectSchema.optional(), where: tblTitSubClassWhereUniqueInputObjectSchema }).strict();