import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitlesSelectObjectSchema as tblTitlesSelectObjectSchema } from './objects/tblTitlesSelect.schema';
import { tblTitlesIncludeObjectSchema as tblTitlesIncludeObjectSchema } from './objects/tblTitlesInclude.schema';
import { tblTitlesUpdateInputObjectSchema as tblTitlesUpdateInputObjectSchema } from './objects/tblTitlesUpdateInput.schema';
import { tblTitlesUncheckedUpdateInputObjectSchema as tblTitlesUncheckedUpdateInputObjectSchema } from './objects/tblTitlesUncheckedUpdateInput.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './objects/tblTitlesWhereUniqueInput.schema';

export const tblTitlesUpdateOneSchema: z.ZodType<Prisma.tblTitlesUpdateArgs> = z.object({ select: tblTitlesSelectObjectSchema.optional(), include: tblTitlesIncludeObjectSchema.optional(), data: z.union([tblTitlesUpdateInputObjectSchema, tblTitlesUncheckedUpdateInputObjectSchema]), where: tblTitlesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTitlesUpdateArgs>;

export const tblTitlesUpdateOneZodSchema = z.object({ select: tblTitlesSelectObjectSchema.optional(), include: tblTitlesIncludeObjectSchema.optional(), data: z.union([tblTitlesUpdateInputObjectSchema, tblTitlesUncheckedUpdateInputObjectSchema]), where: tblTitlesWhereUniqueInputObjectSchema }).strict();