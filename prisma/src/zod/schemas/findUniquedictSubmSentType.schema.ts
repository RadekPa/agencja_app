import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictSubmSentTypeSelectObjectSchema as dictSubmSentTypeSelectObjectSchema } from './objects/dictSubmSentTypeSelect.schema';
import { dictSubmSentTypeIncludeObjectSchema as dictSubmSentTypeIncludeObjectSchema } from './objects/dictSubmSentTypeInclude.schema';
import { dictSubmSentTypeWhereUniqueInputObjectSchema as dictSubmSentTypeWhereUniqueInputObjectSchema } from './objects/dictSubmSentTypeWhereUniqueInput.schema';

export const dictSubmSentTypeFindUniqueSchema: z.ZodType<Prisma.dictSubmSentTypeFindUniqueArgs> = z.object({ select: dictSubmSentTypeSelectObjectSchema.optional(), include: dictSubmSentTypeIncludeObjectSchema.optional(), where: dictSubmSentTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictSubmSentTypeFindUniqueArgs>;

export const dictSubmSentTypeFindUniqueZodSchema = z.object({ select: dictSubmSentTypeSelectObjectSchema.optional(), include: dictSubmSentTypeIncludeObjectSchema.optional(), where: dictSubmSentTypeWhereUniqueInputObjectSchema }).strict();