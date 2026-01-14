import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ISBNORG: z.string(),
  ISBNHELION: z.string()
}).strict();
export const HelionLocalISBNORGISBNHELIONCompoundUniqueInputObjectSchema: z.ZodType<Prisma.HelionLocalISBNORGISBNHELIONCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.HelionLocalISBNORGISBNHELIONCompoundUniqueInput>;
export const HelionLocalISBNORGISBNHELIONCompoundUniqueInputObjectZodSchema = makeSchema();
