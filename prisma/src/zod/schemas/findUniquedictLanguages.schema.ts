import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictLanguagesSelectObjectSchema as dictLanguagesSelectObjectSchema } from './objects/dictLanguagesSelect.schema';
import { dictLanguagesIncludeObjectSchema as dictLanguagesIncludeObjectSchema } from './objects/dictLanguagesInclude.schema';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './objects/dictLanguagesWhereUniqueInput.schema';

export const dictLanguagesFindUniqueSchema: z.ZodType<Prisma.dictLanguagesFindUniqueArgs> = z.object({ select: dictLanguagesSelectObjectSchema.optional(), include: dictLanguagesIncludeObjectSchema.optional(), where: dictLanguagesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictLanguagesFindUniqueArgs>;

export const dictLanguagesFindUniqueZodSchema = z.object({ select: dictLanguagesSelectObjectSchema.optional(), include: dictLanguagesIncludeObjectSchema.optional(), where: dictLanguagesWhereUniqueInputObjectSchema }).strict();