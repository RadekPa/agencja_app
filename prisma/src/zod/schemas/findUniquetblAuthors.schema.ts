import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAuthorsSelectObjectSchema as tblAuthorsSelectObjectSchema } from './objects/tblAuthorsSelect.schema';
import { tblAuthorsIncludeObjectSchema as tblAuthorsIncludeObjectSchema } from './objects/tblAuthorsInclude.schema';
import { tblAuthorsWhereUniqueInputObjectSchema as tblAuthorsWhereUniqueInputObjectSchema } from './objects/tblAuthorsWhereUniqueInput.schema';

export const tblAuthorsFindUniqueSchema: z.ZodType<Prisma.tblAuthorsFindUniqueArgs> = z.object({ select: tblAuthorsSelectObjectSchema.optional(), include: tblAuthorsIncludeObjectSchema.optional(), where: tblAuthorsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblAuthorsFindUniqueArgs>;

export const tblAuthorsFindUniqueZodSchema = z.object({ select: tblAuthorsSelectObjectSchema.optional(), include: tblAuthorsIncludeObjectSchema.optional(), where: tblAuthorsWhereUniqueInputObjectSchema }).strict();