import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { sysdiagramsSelectObjectSchema as sysdiagramsSelectObjectSchema } from './objects/sysdiagramsSelect.schema';
import { sysdiagramsWhereUniqueInputObjectSchema as sysdiagramsWhereUniqueInputObjectSchema } from './objects/sysdiagramsWhereUniqueInput.schema';

export const sysdiagramsFindUniqueOrThrowSchema: z.ZodType<Prisma.sysdiagramsFindUniqueOrThrowArgs> = z.object({ select: sysdiagramsSelectObjectSchema.optional(),  where: sysdiagramsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.sysdiagramsFindUniqueOrThrowArgs>;

export const sysdiagramsFindUniqueOrThrowZodSchema = z.object({ select: sysdiagramsSelectObjectSchema.optional(),  where: sysdiagramsWhereUniqueInputObjectSchema }).strict();