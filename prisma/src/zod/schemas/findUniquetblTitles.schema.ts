import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitlesSelectObjectSchema as tblTitlesSelectObjectSchema } from './objects/tblTitlesSelect.schema';
import { tblTitlesIncludeObjectSchema as tblTitlesIncludeObjectSchema } from './objects/tblTitlesInclude.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './objects/tblTitlesWhereUniqueInput.schema';

export const tblTitlesFindUniqueSchema: z.ZodType<Prisma.tblTitlesFindUniqueArgs> = z.object({ select: tblTitlesSelectObjectSchema.optional(), include: tblTitlesIncludeObjectSchema.optional(), where: tblTitlesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTitlesFindUniqueArgs>;

export const tblTitlesFindUniqueZodSchema = z.object({ select: tblTitlesSelectObjectSchema.optional(), include: tblTitlesIncludeObjectSchema.optional(), where: tblTitlesWhereUniqueInputObjectSchema }).strict();