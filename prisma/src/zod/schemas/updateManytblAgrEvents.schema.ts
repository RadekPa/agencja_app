import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrEventsUpdateManyMutationInputObjectSchema as tblAgrEventsUpdateManyMutationInputObjectSchema } from './objects/tblAgrEventsUpdateManyMutationInput.schema';
import { tblAgrEventsWhereInputObjectSchema as tblAgrEventsWhereInputObjectSchema } from './objects/tblAgrEventsWhereInput.schema';

export const tblAgrEventsUpdateManySchema: z.ZodType<Prisma.tblAgrEventsUpdateManyArgs> = z.object({ data: tblAgrEventsUpdateManyMutationInputObjectSchema, where: tblAgrEventsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblAgrEventsUpdateManyArgs>;

export const tblAgrEventsUpdateManyZodSchema = z.object({ data: tblAgrEventsUpdateManyMutationInputObjectSchema, where: tblAgrEventsWhereInputObjectSchema.optional() }).strict();