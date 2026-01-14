import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitlesSelectObjectSchema as tblTitlesSelectObjectSchema } from './objects/tblTitlesSelect.schema';
import { tblTitlesIncludeObjectSchema as tblTitlesIncludeObjectSchema } from './objects/tblTitlesInclude.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './objects/tblTitlesWhereUniqueInput.schema';

export const tblTitlesFindUniqueOrThrowSchema: z.ZodType<Prisma.tblTitlesFindUniqueOrThrowArgs> = z.object({ select: tblTitlesSelectObjectSchema.optional(), include: tblTitlesIncludeObjectSchema.optional(), where: tblTitlesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTitlesFindUniqueOrThrowArgs>;

export const tblTitlesFindUniqueOrThrowZodSchema = z.object({ select: tblTitlesSelectObjectSchema.optional(), include: tblTitlesIncludeObjectSchema.optional(), where: tblTitlesWhereUniqueInputObjectSchema }).strict();