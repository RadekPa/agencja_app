import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblClients_obsoleteIncludeObjectSchema as tblClients_obsoleteIncludeObjectSchema } from './objects/tblClients_obsoleteInclude.schema';
import { tblClients_obsoleteOrderByWithRelationInputObjectSchema as tblClients_obsoleteOrderByWithRelationInputObjectSchema } from './objects/tblClients_obsoleteOrderByWithRelationInput.schema';
import { tblClients_obsoleteWhereInputObjectSchema as tblClients_obsoleteWhereInputObjectSchema } from './objects/tblClients_obsoleteWhereInput.schema';
import { tblClients_obsoleteWhereUniqueInputObjectSchema as tblClients_obsoleteWhereUniqueInputObjectSchema } from './objects/tblClients_obsoleteWhereUniqueInput.schema';
import { TblClientsObsoleteScalarFieldEnumSchema } from './enums/TblClientsObsoleteScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblClients_obsoleteFindFirstOrThrowSelectSchema: z.ZodType<Prisma.tblClients_obsoleteSelect> = z.object({
    CustID: z.boolean().optional(),
    RepModeID: z.boolean().optional(),
    GraalID: z.boolean().optional(),
    Commission: z.boolean().optional(),
    DefAgrDoc: z.boolean().optional(),
    Jurisdiction: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    dictRepModes: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblClients_obsoleteSelect>;

export const tblClients_obsoleteFindFirstOrThrowSelectZodSchema = z.object({
    CustID: z.boolean().optional(),
    RepModeID: z.boolean().optional(),
    GraalID: z.boolean().optional(),
    Commission: z.boolean().optional(),
    DefAgrDoc: z.boolean().optional(),
    Jurisdiction: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    dictRepModes: z.boolean().optional()
  }).strict();

export const tblClients_obsoleteFindFirstOrThrowSchema: z.ZodType<Prisma.tblClients_obsoleteFindFirstOrThrowArgs> = z.object({ select: tblClients_obsoleteFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblClients_obsoleteIncludeObjectSchema.optional()), orderBy: z.union([tblClients_obsoleteOrderByWithRelationInputObjectSchema, tblClients_obsoleteOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblClients_obsoleteWhereInputObjectSchema.optional(), cursor: tblClients_obsoleteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblClientsObsoleteScalarFieldEnumSchema, TblClientsObsoleteScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblClients_obsoleteFindFirstOrThrowArgs>;

export const tblClients_obsoleteFindFirstOrThrowZodSchema = z.object({ select: tblClients_obsoleteFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblClients_obsoleteIncludeObjectSchema.optional()), orderBy: z.union([tblClients_obsoleteOrderByWithRelationInputObjectSchema, tblClients_obsoleteOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblClients_obsoleteWhereInputObjectSchema.optional(), cursor: tblClients_obsoleteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblClientsObsoleteScalarFieldEnumSchema, TblClientsObsoleteScalarFieldEnumSchema.array()]).optional() }).strict();