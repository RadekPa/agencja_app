import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictEventsSelectObjectSchema as dictEventsSelectObjectSchema } from './objects/dictEventsSelect.schema';
import { dictEventsIncludeObjectSchema as dictEventsIncludeObjectSchema } from './objects/dictEventsInclude.schema';
import { dictEventsWhereUniqueInputObjectSchema as dictEventsWhereUniqueInputObjectSchema } from './objects/dictEventsWhereUniqueInput.schema';

export const dictEventsFindUniqueSchema: z.ZodType<Prisma.dictEventsFindUniqueArgs> = z.object({ select: dictEventsSelectObjectSchema.optional(), include: dictEventsIncludeObjectSchema.optional(), where: dictEventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictEventsFindUniqueArgs>;

export const dictEventsFindUniqueZodSchema = z.object({ select: dictEventsSelectObjectSchema.optional(), include: dictEventsIncludeObjectSchema.optional(), where: dictEventsWhereUniqueInputObjectSchema }).strict();