import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitEventsUpdateManyMutationInputObjectSchema as tblTitEventsUpdateManyMutationInputObjectSchema } from './objects/tblTitEventsUpdateManyMutationInput.schema';
import { tblTitEventsWhereInputObjectSchema as tblTitEventsWhereInputObjectSchema } from './objects/tblTitEventsWhereInput.schema';

export const tblTitEventsUpdateManySchema: z.ZodType<Prisma.tblTitEventsUpdateManyArgs> = z.object({ data: tblTitEventsUpdateManyMutationInputObjectSchema, where: tblTitEventsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblTitEventsUpdateManyArgs>;

export const tblTitEventsUpdateManyZodSchema = z.object({ data: tblTitEventsUpdateManyMutationInputObjectSchema, where: tblTitEventsWhereInputObjectSchema.optional() }).strict();