import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitlesSelectObjectSchema as tblTitlesSelectObjectSchema } from './objects/tblTitlesSelect.schema';
import { tblTitlesIncludeObjectSchema as tblTitlesIncludeObjectSchema } from './objects/tblTitlesInclude.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './objects/tblTitlesWhereUniqueInput.schema';

export const tblTitlesDeleteOneSchema: z.ZodType<Prisma.tblTitlesDeleteArgs> = z.object({ select: tblTitlesSelectObjectSchema.optional(), include: tblTitlesIncludeObjectSchema.optional(), where: tblTitlesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTitlesDeleteArgs>;

export const tblTitlesDeleteOneZodSchema = z.object({ select: tblTitlesSelectObjectSchema.optional(), include: tblTitlesIncludeObjectSchema.optional(), where: tblTitlesWhereUniqueInputObjectSchema }).strict();