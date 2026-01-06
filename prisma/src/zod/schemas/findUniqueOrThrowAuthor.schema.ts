import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuthorSelectObjectSchema as AuthorSelectObjectSchema } from './objects/AuthorSelect.schema';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema';

export const AuthorFindUniqueOrThrowSchema: z.ZodType<Prisma.AuthorFindUniqueOrThrowArgs> = z.object({ select: AuthorSelectObjectSchema.optional(),  where: AuthorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AuthorFindUniqueOrThrowArgs>;

export const AuthorFindUniqueOrThrowZodSchema = z.object({ select: AuthorSelectObjectSchema.optional(),  where: AuthorWhereUniqueInputObjectSchema }).strict();