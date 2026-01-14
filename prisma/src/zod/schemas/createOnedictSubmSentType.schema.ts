import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictSubmSentTypeSelectObjectSchema as dictSubmSentTypeSelectObjectSchema } from './objects/dictSubmSentTypeSelect.schema';
import { dictSubmSentTypeIncludeObjectSchema as dictSubmSentTypeIncludeObjectSchema } from './objects/dictSubmSentTypeInclude.schema';
import { dictSubmSentTypeCreateInputObjectSchema as dictSubmSentTypeCreateInputObjectSchema } from './objects/dictSubmSentTypeCreateInput.schema';
import { dictSubmSentTypeUncheckedCreateInputObjectSchema as dictSubmSentTypeUncheckedCreateInputObjectSchema } from './objects/dictSubmSentTypeUncheckedCreateInput.schema';

export const dictSubmSentTypeCreateOneSchema: z.ZodType<Prisma.dictSubmSentTypeCreateArgs> = z.object({ select: dictSubmSentTypeSelectObjectSchema.optional(), include: dictSubmSentTypeIncludeObjectSchema.optional(), data: z.union([dictSubmSentTypeCreateInputObjectSchema, dictSubmSentTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictSubmSentTypeCreateArgs>;

export const dictSubmSentTypeCreateOneZodSchema = z.object({ select: dictSubmSentTypeSelectObjectSchema.optional(), include: dictSubmSentTypeIncludeObjectSchema.optional(), data: z.union([dictSubmSentTypeCreateInputObjectSchema, dictSubmSentTypeUncheckedCreateInputObjectSchema]) }).strict();