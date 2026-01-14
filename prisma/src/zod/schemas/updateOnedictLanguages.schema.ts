import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictLanguagesSelectObjectSchema as dictLanguagesSelectObjectSchema } from './objects/dictLanguagesSelect.schema';
import { dictLanguagesIncludeObjectSchema as dictLanguagesIncludeObjectSchema } from './objects/dictLanguagesInclude.schema';
import { dictLanguagesUpdateInputObjectSchema as dictLanguagesUpdateInputObjectSchema } from './objects/dictLanguagesUpdateInput.schema';
import { dictLanguagesUncheckedUpdateInputObjectSchema as dictLanguagesUncheckedUpdateInputObjectSchema } from './objects/dictLanguagesUncheckedUpdateInput.schema';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './objects/dictLanguagesWhereUniqueInput.schema';

export const dictLanguagesUpdateOneSchema: z.ZodType<Prisma.dictLanguagesUpdateArgs> = z.object({ select: dictLanguagesSelectObjectSchema.optional(), include: dictLanguagesIncludeObjectSchema.optional(), data: z.union([dictLanguagesUpdateInputObjectSchema, dictLanguagesUncheckedUpdateInputObjectSchema]), where: dictLanguagesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictLanguagesUpdateArgs>;

export const dictLanguagesUpdateOneZodSchema = z.object({ select: dictLanguagesSelectObjectSchema.optional(), include: dictLanguagesIncludeObjectSchema.optional(), data: z.union([dictLanguagesUpdateInputObjectSchema, dictLanguagesUncheckedUpdateInputObjectSchema]), where: dictLanguagesWhereUniqueInputObjectSchema }).strict();