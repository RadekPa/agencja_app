import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { sysdiagramsSelectObjectSchema as sysdiagramsSelectObjectSchema } from './objects/sysdiagramsSelect.schema';
import { sysdiagramsWhereUniqueInputObjectSchema as sysdiagramsWhereUniqueInputObjectSchema } from './objects/sysdiagramsWhereUniqueInput.schema';

export const sysdiagramsFindUniqueSchema: z.ZodType<Prisma.sysdiagramsFindUniqueArgs> = z.object({ select: sysdiagramsSelectObjectSchema.optional(),  where: sysdiagramsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.sysdiagramsFindUniqueArgs>;

export const sysdiagramsFindUniqueZodSchema = z.object({ select: sysdiagramsSelectObjectSchema.optional(),  where: sysdiagramsWhereUniqueInputObjectSchema }).strict();