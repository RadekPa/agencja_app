import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { sysdiagramsOrderByWithRelationInputObjectSchema as sysdiagramsOrderByWithRelationInputObjectSchema } from './objects/sysdiagramsOrderByWithRelationInput.schema';
import { sysdiagramsWhereInputObjectSchema as sysdiagramsWhereInputObjectSchema } from './objects/sysdiagramsWhereInput.schema';
import { sysdiagramsWhereUniqueInputObjectSchema as sysdiagramsWhereUniqueInputObjectSchema } from './objects/sysdiagramsWhereUniqueInput.schema';
import { SysdiagramsScalarFieldEnumSchema } from './enums/SysdiagramsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const sysdiagramsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.sysdiagramsSelect> = z.object({
    name: z.boolean().optional(),
    principal_id: z.boolean().optional(),
    diagram_id: z.boolean().optional(),
    version: z.boolean().optional(),
    definition: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.sysdiagramsSelect>;

export const sysdiagramsFindFirstOrThrowSelectZodSchema = z.object({
    name: z.boolean().optional(),
    principal_id: z.boolean().optional(),
    diagram_id: z.boolean().optional(),
    version: z.boolean().optional(),
    definition: z.boolean().optional()
  }).strict();

export const sysdiagramsFindFirstOrThrowSchema: z.ZodType<Prisma.sysdiagramsFindFirstOrThrowArgs> = z.object({ select: sysdiagramsFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([sysdiagramsOrderByWithRelationInputObjectSchema, sysdiagramsOrderByWithRelationInputObjectSchema.array()]).optional(), where: sysdiagramsWhereInputObjectSchema.optional(), cursor: sysdiagramsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SysdiagramsScalarFieldEnumSchema, SysdiagramsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.sysdiagramsFindFirstOrThrowArgs>;

export const sysdiagramsFindFirstOrThrowZodSchema = z.object({ select: sysdiagramsFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([sysdiagramsOrderByWithRelationInputObjectSchema, sysdiagramsOrderByWithRelationInputObjectSchema.array()]).optional(), where: sysdiagramsWhereInputObjectSchema.optional(), cursor: sysdiagramsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SysdiagramsScalarFieldEnumSchema, SysdiagramsScalarFieldEnumSchema.array()]).optional() }).strict();