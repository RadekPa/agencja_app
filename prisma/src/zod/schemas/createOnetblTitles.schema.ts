import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitlesSelectObjectSchema as tblTitlesSelectObjectSchema } from './objects/tblTitlesSelect.schema';
import { tblTitlesIncludeObjectSchema as tblTitlesIncludeObjectSchema } from './objects/tblTitlesInclude.schema';
import { tblTitlesCreateInputObjectSchema as tblTitlesCreateInputObjectSchema } from './objects/tblTitlesCreateInput.schema';
import { tblTitlesUncheckedCreateInputObjectSchema as tblTitlesUncheckedCreateInputObjectSchema } from './objects/tblTitlesUncheckedCreateInput.schema';

export const tblTitlesCreateOneSchema: z.ZodType<Prisma.tblTitlesCreateArgs> = z.object({ select: tblTitlesSelectObjectSchema.optional(), include: tblTitlesIncludeObjectSchema.optional(), data: z.union([tblTitlesCreateInputObjectSchema, tblTitlesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblTitlesCreateArgs>;

export const tblTitlesCreateOneZodSchema = z.object({ select: tblTitlesSelectObjectSchema.optional(), include: tblTitlesIncludeObjectSchema.optional(), data: z.union([tblTitlesCreateInputObjectSchema, tblTitlesUncheckedCreateInputObjectSchema]) }).strict();