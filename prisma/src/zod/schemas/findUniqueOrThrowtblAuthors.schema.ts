import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAuthorsSelectObjectSchema as tblAuthorsSelectObjectSchema } from './objects/tblAuthorsSelect.schema';
import { tblAuthorsIncludeObjectSchema as tblAuthorsIncludeObjectSchema } from './objects/tblAuthorsInclude.schema';
import { tblAuthorsWhereUniqueInputObjectSchema as tblAuthorsWhereUniqueInputObjectSchema } from './objects/tblAuthorsWhereUniqueInput.schema';

export const tblAuthorsFindUniqueOrThrowSchema: z.ZodType<Prisma.tblAuthorsFindUniqueOrThrowArgs> = z.object({ select: tblAuthorsSelectObjectSchema.optional(), include: tblAuthorsIncludeObjectSchema.optional(), where: tblAuthorsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblAuthorsFindUniqueOrThrowArgs>;

export const tblAuthorsFindUniqueOrThrowZodSchema = z.object({ select: tblAuthorsSelectObjectSchema.optional(), include: tblAuthorsIncludeObjectSchema.optional(), where: tblAuthorsWhereUniqueInputObjectSchema }).strict();