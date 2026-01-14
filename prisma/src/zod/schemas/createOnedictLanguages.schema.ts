import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictLanguagesSelectObjectSchema as dictLanguagesSelectObjectSchema } from './objects/dictLanguagesSelect.schema';
import { dictLanguagesIncludeObjectSchema as dictLanguagesIncludeObjectSchema } from './objects/dictLanguagesInclude.schema';
import { dictLanguagesCreateInputObjectSchema as dictLanguagesCreateInputObjectSchema } from './objects/dictLanguagesCreateInput.schema';
import { dictLanguagesUncheckedCreateInputObjectSchema as dictLanguagesUncheckedCreateInputObjectSchema } from './objects/dictLanguagesUncheckedCreateInput.schema';

export const dictLanguagesCreateOneSchema: z.ZodType<Prisma.dictLanguagesCreateArgs> = z.object({ select: dictLanguagesSelectObjectSchema.optional(), include: dictLanguagesIncludeObjectSchema.optional(), data: z.union([dictLanguagesCreateInputObjectSchema, dictLanguagesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictLanguagesCreateArgs>;

export const dictLanguagesCreateOneZodSchema = z.object({ select: dictLanguagesSelectObjectSchema.optional(), include: dictLanguagesIncludeObjectSchema.optional(), data: z.union([dictLanguagesCreateInputObjectSchema, dictLanguagesUncheckedCreateInputObjectSchema]) }).strict();