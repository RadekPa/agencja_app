import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmEventsUpdateManyMutationInputObjectSchema as tblSubmEventsUpdateManyMutationInputObjectSchema } from './objects/tblSubmEventsUpdateManyMutationInput.schema';
import { tblSubmEventsWhereInputObjectSchema as tblSubmEventsWhereInputObjectSchema } from './objects/tblSubmEventsWhereInput.schema';

export const tblSubmEventsUpdateManySchema: z.ZodType<Prisma.tblSubmEventsUpdateManyArgs> = z.object({ data: tblSubmEventsUpdateManyMutationInputObjectSchema, where: tblSubmEventsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblSubmEventsUpdateManyArgs>;

export const tblSubmEventsUpdateManyZodSchema = z.object({ data: tblSubmEventsUpdateManyMutationInputObjectSchema, where: tblSubmEventsWhereInputObjectSchema.optional() }).strict();