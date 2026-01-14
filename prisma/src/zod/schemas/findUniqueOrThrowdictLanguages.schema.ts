import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictLanguagesSelectObjectSchema as dictLanguagesSelectObjectSchema } from './objects/dictLanguagesSelect.schema';
import { dictLanguagesIncludeObjectSchema as dictLanguagesIncludeObjectSchema } from './objects/dictLanguagesInclude.schema';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './objects/dictLanguagesWhereUniqueInput.schema';

export const dictLanguagesFindUniqueOrThrowSchema: z.ZodType<Prisma.dictLanguagesFindUniqueOrThrowArgs> = z.object({ select: dictLanguagesSelectObjectSchema.optional(), include: dictLanguagesIncludeObjectSchema.optional(), where: dictLanguagesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictLanguagesFindUniqueOrThrowArgs>;

export const dictLanguagesFindUniqueOrThrowZodSchema = z.object({ select: dictLanguagesSelectObjectSchema.optional(), include: dictLanguagesIncludeObjectSchema.optional(), where: dictLanguagesWhereUniqueInputObjectSchema }).strict();