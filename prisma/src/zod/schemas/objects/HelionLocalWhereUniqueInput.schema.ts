import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HelionLocalISBNORGISBNHELIONCompoundUniqueInputObjectSchema as HelionLocalISBNORGISBNHELIONCompoundUniqueInputObjectSchema } from './HelionLocalISBNORGISBNHELIONCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  ISBNORG_ISBNHELION: z.lazy(() => HelionLocalISBNORGISBNHELIONCompoundUniqueInputObjectSchema).optional()
}).strict();
export const HelionLocalWhereUniqueInputObjectSchema: z.ZodType<Prisma.HelionLocalWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.HelionLocalWhereUniqueInput>;
export const HelionLocalWhereUniqueInputObjectZodSchema = makeSchema();
