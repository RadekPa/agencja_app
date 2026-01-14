import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmissionsUpdateManyMutationInputObjectSchema as tblSubmissionsUpdateManyMutationInputObjectSchema } from './objects/tblSubmissionsUpdateManyMutationInput.schema';
import { tblSubmissionsWhereInputObjectSchema as tblSubmissionsWhereInputObjectSchema } from './objects/tblSubmissionsWhereInput.schema';

export const tblSubmissionsUpdateManySchema: z.ZodType<Prisma.tblSubmissionsUpdateManyArgs> = z.object({ data: tblSubmissionsUpdateManyMutationInputObjectSchema, where: tblSubmissionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateManyArgs>;

export const tblSubmissionsUpdateManyZodSchema = z.object({ data: tblSubmissionsUpdateManyMutationInputObjectSchema, where: tblSubmissionsWhereInputObjectSchema.optional() }).strict();