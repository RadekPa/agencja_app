import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictEventsSelectObjectSchema as dictEventsSelectObjectSchema } from './objects/dictEventsSelect.schema';
import { dictEventsIncludeObjectSchema as dictEventsIncludeObjectSchema } from './objects/dictEventsInclude.schema';
import { dictEventsWhereUniqueInputObjectSchema as dictEventsWhereUniqueInputObjectSchema } from './objects/dictEventsWhereUniqueInput.schema';

export const dictEventsFindUniqueOrThrowSchema: z.ZodType<Prisma.dictEventsFindUniqueOrThrowArgs> = z.object({ select: dictEventsSelectObjectSchema.optional(), include: dictEventsIncludeObjectSchema.optional(), where: dictEventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictEventsFindUniqueOrThrowArgs>;

export const dictEventsFindUniqueOrThrowZodSchema = z.object({ select: dictEventsSelectObjectSchema.optional(), include: dictEventsIncludeObjectSchema.optional(), where: dictEventsWhereUniqueInputObjectSchema }).strict();