import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictArticlesSelectObjectSchema as dictArticlesSelectObjectSchema } from './objects/dictArticlesSelect.schema';
import { dictArticlesIncludeObjectSchema as dictArticlesIncludeObjectSchema } from './objects/dictArticlesInclude.schema';
import { dictArticlesCreateInputObjectSchema as dictArticlesCreateInputObjectSchema } from './objects/dictArticlesCreateInput.schema';
import { dictArticlesUncheckedCreateInputObjectSchema as dictArticlesUncheckedCreateInputObjectSchema } from './objects/dictArticlesUncheckedCreateInput.schema';

export const dictArticlesCreateOneSchema: z.ZodType<Prisma.dictArticlesCreateArgs> = z.object({ select: dictArticlesSelectObjectSchema.optional(), include: dictArticlesIncludeObjectSchema.optional(), data: z.union([dictArticlesCreateInputObjectSchema, dictArticlesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictArticlesCreateArgs>;

export const dictArticlesCreateOneZodSchema = z.object({ select: dictArticlesSelectObjectSchema.optional(), include: dictArticlesIncludeObjectSchema.optional(), data: z.union([dictArticlesCreateInputObjectSchema, dictArticlesUncheckedCreateInputObjectSchema]) }).strict();