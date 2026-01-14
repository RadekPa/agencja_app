import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictEventsSelectObjectSchema as dictEventsSelectObjectSchema } from './objects/dictEventsSelect.schema';
import { dictEventsIncludeObjectSchema as dictEventsIncludeObjectSchema } from './objects/dictEventsInclude.schema';
import { dictEventsWhereUniqueInputObjectSchema as dictEventsWhereUniqueInputObjectSchema } from './objects/dictEventsWhereUniqueInput.schema';

export const dictEventsDeleteOneSchema: z.ZodType<Prisma.dictEventsDeleteArgs> = z.object({ select: dictEventsSelectObjectSchema.optional(), include: dictEventsIncludeObjectSchema.optional(), where: dictEventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictEventsDeleteArgs>;

export const dictEventsDeleteOneZodSchema = z.object({ select: dictEventsSelectObjectSchema.optional(), include: dictEventsIncludeObjectSchema.optional(), where: dictEventsWhereUniqueInputObjectSchema }).strict();