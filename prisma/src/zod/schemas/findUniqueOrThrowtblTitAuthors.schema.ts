import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuthorsSelectObjectSchema as tblTitAuthorsSelectObjectSchema } from './objects/tblTitAuthorsSelect.schema';
import { tblTitAuthorsIncludeObjectSchema as tblTitAuthorsIncludeObjectSchema } from './objects/tblTitAuthorsInclude.schema';
import { tblTitAuthorsWhereUniqueInputObjectSchema as tblTitAuthorsWhereUniqueInputObjectSchema } from './objects/tblTitAuthorsWhereUniqueInput.schema';

export const tblTitAuthorsFindUniqueOrThrowSchema: z.ZodType<Prisma.tblTitAuthorsFindUniqueOrThrowArgs> = z.object({ select: tblTitAuthorsSelectObjectSchema.optional(), include: tblTitAuthorsIncludeObjectSchema.optional(), where: tblTitAuthorsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTitAuthorsFindUniqueOrThrowArgs>;

export const tblTitAuthorsFindUniqueOrThrowZodSchema = z.object({ select: tblTitAuthorsSelectObjectSchema.optional(), include: tblTitAuthorsIncludeObjectSchema.optional(), where: tblTitAuthorsWhereUniqueInputObjectSchema }).strict();