import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { sysdiagramsUpdateManyMutationInputObjectSchema as sysdiagramsUpdateManyMutationInputObjectSchema } from './objects/sysdiagramsUpdateManyMutationInput.schema';
import { sysdiagramsWhereInputObjectSchema as sysdiagramsWhereInputObjectSchema } from './objects/sysdiagramsWhereInput.schema';

export const sysdiagramsUpdateManySchema: z.ZodType<Prisma.sysdiagramsUpdateManyArgs> = z.object({ data: sysdiagramsUpdateManyMutationInputObjectSchema, where: sysdiagramsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.sysdiagramsUpdateManyArgs>;

export const sysdiagramsUpdateManyZodSchema = z.object({ data: sysdiagramsUpdateManyMutationInputObjectSchema, where: sysdiagramsWhereInputObjectSchema.optional() }).strict();