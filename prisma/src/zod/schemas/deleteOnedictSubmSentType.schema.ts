import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictSubmSentTypeSelectObjectSchema as dictSubmSentTypeSelectObjectSchema } from './objects/dictSubmSentTypeSelect.schema';
import { dictSubmSentTypeIncludeObjectSchema as dictSubmSentTypeIncludeObjectSchema } from './objects/dictSubmSentTypeInclude.schema';
import { dictSubmSentTypeWhereUniqueInputObjectSchema as dictSubmSentTypeWhereUniqueInputObjectSchema } from './objects/dictSubmSentTypeWhereUniqueInput.schema';

export const dictSubmSentTypeDeleteOneSchema: z.ZodType<Prisma.dictSubmSentTypeDeleteArgs> = z.object({ select: dictSubmSentTypeSelectObjectSchema.optional(), include: dictSubmSentTypeIncludeObjectSchema.optional(), where: dictSubmSentTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictSubmSentTypeDeleteArgs>;

export const dictSubmSentTypeDeleteOneZodSchema = z.object({ select: dictSubmSentTypeSelectObjectSchema.optional(), include: dictSubmSentTypeIncludeObjectSchema.optional(), where: dictSubmSentTypeWhereUniqueInputObjectSchema }).strict();