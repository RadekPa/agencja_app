import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitlesSelectObjectSchema as tblTitlesSelectObjectSchema } from './objects/tblTitlesSelect.schema';
import { tblTitlesIncludeObjectSchema as tblTitlesIncludeObjectSchema } from './objects/tblTitlesInclude.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './objects/tblTitlesWhereUniqueInput.schema';
import { tblTitlesCreateInputObjectSchema as tblTitlesCreateInputObjectSchema } from './objects/tblTitlesCreateInput.schema';
import { tblTitlesUncheckedCreateInputObjectSchema as tblTitlesUncheckedCreateInputObjectSchema } from './objects/tblTitlesUncheckedCreateInput.schema';
import { tblTitlesUpdateInputObjectSchema as tblTitlesUpdateInputObjectSchema } from './objects/tblTitlesUpdateInput.schema';
import { tblTitlesUncheckedUpdateInputObjectSchema as tblTitlesUncheckedUpdateInputObjectSchema } from './objects/tblTitlesUncheckedUpdateInput.schema';

export const tblTitlesUpsertOneSchema: z.ZodType<Prisma.tblTitlesUpsertArgs> = z.object({ select: tblTitlesSelectObjectSchema.optional(), include: tblTitlesIncludeObjectSchema.optional(), where: tblTitlesWhereUniqueInputObjectSchema, create: z.union([ tblTitlesCreateInputObjectSchema, tblTitlesUncheckedCreateInputObjectSchema ]), update: z.union([ tblTitlesUpdateInputObjectSchema, tblTitlesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblTitlesUpsertArgs>;

export const tblTitlesUpsertOneZodSchema = z.object({ select: tblTitlesSelectObjectSchema.optional(), include: tblTitlesIncludeObjectSchema.optional(), where: tblTitlesWhereUniqueInputObjectSchema, create: z.union([ tblTitlesCreateInputObjectSchema, tblTitlesUncheckedCreateInputObjectSchema ]), update: z.union([ tblTitlesUpdateInputObjectSchema, tblTitlesUncheckedUpdateInputObjectSchema ]) }).strict();