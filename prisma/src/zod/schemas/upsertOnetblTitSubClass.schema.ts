import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitSubClassSelectObjectSchema as tblTitSubClassSelectObjectSchema } from './objects/tblTitSubClassSelect.schema';
import { tblTitSubClassIncludeObjectSchema as tblTitSubClassIncludeObjectSchema } from './objects/tblTitSubClassInclude.schema';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './objects/tblTitSubClassWhereUniqueInput.schema';
import { tblTitSubClassCreateInputObjectSchema as tblTitSubClassCreateInputObjectSchema } from './objects/tblTitSubClassCreateInput.schema';
import { tblTitSubClassUncheckedCreateInputObjectSchema as tblTitSubClassUncheckedCreateInputObjectSchema } from './objects/tblTitSubClassUncheckedCreateInput.schema';
import { tblTitSubClassUpdateInputObjectSchema as tblTitSubClassUpdateInputObjectSchema } from './objects/tblTitSubClassUpdateInput.schema';
import { tblTitSubClassUncheckedUpdateInputObjectSchema as tblTitSubClassUncheckedUpdateInputObjectSchema } from './objects/tblTitSubClassUncheckedUpdateInput.schema';

export const tblTitSubClassUpsertOneSchema: z.ZodType<Prisma.tblTitSubClassUpsertArgs> = z.object({ select: tblTitSubClassSelectObjectSchema.optional(), include: tblTitSubClassIncludeObjectSchema.optional(), where: tblTitSubClassWhereUniqueInputObjectSchema, create: z.union([ tblTitSubClassCreateInputObjectSchema, tblTitSubClassUncheckedCreateInputObjectSchema ]), update: z.union([ tblTitSubClassUpdateInputObjectSchema, tblTitSubClassUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblTitSubClassUpsertArgs>;

export const tblTitSubClassUpsertOneZodSchema = z.object({ select: tblTitSubClassSelectObjectSchema.optional(), include: tblTitSubClassIncludeObjectSchema.optional(), where: tblTitSubClassWhereUniqueInputObjectSchema, create: z.union([ tblTitSubClassCreateInputObjectSchema, tblTitSubClassUncheckedCreateInputObjectSchema ]), update: z.union([ tblTitSubClassUpdateInputObjectSchema, tblTitSubClassUncheckedUpdateInputObjectSchema ]) }).strict();