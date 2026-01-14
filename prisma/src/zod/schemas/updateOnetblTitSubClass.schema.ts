import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitSubClassSelectObjectSchema as tblTitSubClassSelectObjectSchema } from './objects/tblTitSubClassSelect.schema';
import { tblTitSubClassIncludeObjectSchema as tblTitSubClassIncludeObjectSchema } from './objects/tblTitSubClassInclude.schema';
import { tblTitSubClassUpdateInputObjectSchema as tblTitSubClassUpdateInputObjectSchema } from './objects/tblTitSubClassUpdateInput.schema';
import { tblTitSubClassUncheckedUpdateInputObjectSchema as tblTitSubClassUncheckedUpdateInputObjectSchema } from './objects/tblTitSubClassUncheckedUpdateInput.schema';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './objects/tblTitSubClassWhereUniqueInput.schema';

export const tblTitSubClassUpdateOneSchema: z.ZodType<Prisma.tblTitSubClassUpdateArgs> = z.object({ select: tblTitSubClassSelectObjectSchema.optional(), include: tblTitSubClassIncludeObjectSchema.optional(), data: z.union([tblTitSubClassUpdateInputObjectSchema, tblTitSubClassUncheckedUpdateInputObjectSchema]), where: tblTitSubClassWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTitSubClassUpdateArgs>;

export const tblTitSubClassUpdateOneZodSchema = z.object({ select: tblTitSubClassSelectObjectSchema.optional(), include: tblTitSubClassIncludeObjectSchema.optional(), data: z.union([tblTitSubClassUpdateInputObjectSchema, tblTitSubClassUncheckedUpdateInputObjectSchema]), where: tblTitSubClassWhereUniqueInputObjectSchema }).strict();